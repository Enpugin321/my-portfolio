"use client";

import React from "react";
import { cn } from "@/lib/utils";
import {
  WalletIcon,
  USDTIcon,
  TrandIcon,
  StatCard,
  StatCardTitle,
  StatCardContent,
  StatCardIconWrapper,
  StatCardInfo,
  StatCardValue,
  StatCardMessage,
  ArrowIcon,
} from "@/components/iHedge/ui";

interface Transaction {
  id: number;
  amount: string;
  price: string;
  usdt: string;
  txId: string;
  time: string;
  status: string;
}

interface PaginationData {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

interface Props {
  className?: string;
}

export const MyAccount: React.FC<Props> = ({ className }) => {
  const [activeTab, setActiveTab] = React.useState<"deposit" | "withdraw">(
    "deposit",
  );
  const [data, setData] = React.useState<Transaction[]>([]);
  const [pagination, setPagination] = React.useState<PaginationData | null>(
    null,
  );
  const [loading, setLoading] = React.useState(true);
  const [page, setPage] = React.useState(1);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/account-history?type=${activeTab}&page=${page}&limit=5`,
      );
      const json = await res.json();
      setData(json.items);
      setPagination(json.pagination);
    } catch (err) {
      console.error("Failed to fetch history:", err);
    } finally {
      setLoading(false);
    }
  }, [activeTab, page]);

  React.useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleTabChange = (tab: "deposit" | "withdraw") => {
    setActiveTab(tab);
    setPage(1); // Reset to first page when changing tabs
  };

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= (pagination?.totalPages || 1)) {
      setPage(newPage);
    }
  };

  return (
    <div className={cn(className, "flex flex-col gap-8")}>
      {/* Stat Cards */}
      <div className="grid grid-cols-[repeat(3,minmax(210px,1fr))] gap-[10px] overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2">
        <StatCard>
          <StatCardTitle>Total Balance</StatCardTitle>
          <StatCardContent>
            <StatCardIconWrapper>
              <WalletIcon className="text-white" />
            </StatCardIconWrapper>
            <StatCardInfo>
              <StatCardValue>$12,345.67</StatCardValue>
              <StatCardMessage>+5.2% from last month</StatCardMessage>
            </StatCardInfo>
          </StatCardContent>
        </StatCard>
        <StatCard>
          <StatCardTitle>Total Loss</StatCardTitle>
          <StatCardContent>
            <StatCardIconWrapper>
              <TrandIcon className="text-white" />
            </StatCardIconWrapper>
            <StatCardInfo>
              <StatCardValue>$123.45</StatCardValue>
              <StatCardMessage>-2.1% from last month</StatCardMessage>
            </StatCardInfo>
          </StatCardContent>
        </StatCard>
        <StatCard>
          <StatCardTitle>Total Assets</StatCardTitle>
          <StatCardContent>
            <StatCardIconWrapper>
              <USDTIcon className="text-white" />
            </StatCardIconWrapper>
            <StatCardInfo>
              <StatCardValue>$12,345.67</StatCardValue>
              <StatCardMessage>+5.2% from last month</StatCardMessage>
            </StatCardInfo>
          </StatCardContent>
        </StatCard>
      </div>

      <div className="flex flex-col gap-6">
        {/* Tabs */}
        <div className="flex bg-slate-100/50 p-1 rounded-2xl w-fit">
          <button
            onClick={() => handleTabChange("deposit")}
            className={cn(
              "px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
              activeTab === "deposit"
                ? "bg-[#008bf5] text-white shadow-[0_4px_12px_rgba(0,139,245,0.4)]"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50",
            )}
          >
            Deposit History
          </button>
          <button
            onClick={() => handleTabChange("withdraw")}
            className={cn(
              "px-6 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200",
              activeTab === "withdraw"
                ? "bg-[#008bf5] text-white shadow-[0_4px_12px_rgba(0,139,245,0.4)]"
                : "text-slate-500 hover:text-slate-700 hover:bg-slate-200/50",
            )}
          >
            Withdraw History
          </button>
        </div>

        {/* History Table */}
        <div className="w-full overflow-x-auto relative min-h-[400px]">
          {loading && (
            <div className="absolute inset-0 bg-white/50 backdrop-blur-[1px] z-10 flex items-center justify-center rounded-[24px]">
              <div className="w-8 h-8 border-4 border-[#008bf5] border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}
          <table className="w-full py-[30px] px-[40px] bg-white min-w-[900px] border-separate border-spacing-y-3">
            <thead>
              <tr>
                <th className="px-8 pb-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Token Amount
                </th>
                <th className="px-4 pb-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Token Price
                </th>
                <th className="px-4 pb-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  in USDT
                </th>
                <th className="px-4 pb-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Transaction ID
                </th>
                <th className="px-4 pb-4 text-left text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Time
                </th>
                <th className="px-8 pb-4 text-right text-xs font-semibold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr
                  key={item.id}
                  className="bg-background hover:shadow-md transition-all duration-300 [&>td:first-child]:rounded-l-[24px] [&>td:last-child]:rounded-r-[24px]"
                >
                  <td className="px-8 py-5 font-bold text-slate-700 border border-r-0 border-slate-50/50">
                    {item.amount}
                  </td>
                  <td className="px-4 py-5 font-bold text-slate-700 font-mono italic border-y border-slate-50/50">
                    {item.price}
                  </td>
                  <td className="px-4 py-5 font-bold text-slate-700 italic border-y border-slate-50/50">
                    {item.usdt}
                  </td>
                  <td className="px-4 py-5 text-[#008bf5] font-medium border-y border-slate-50/50">
                    {item.txId}
                  </td>
                  <td className="px-4 py-5 text-slate-400 font-semibold border-y border-slate-50/50">
                    {item.time}
                  </td>
                  <td className="px-8 py-5 text-right border border-l-0 border-slate-50/50">
                    <span
                      className={cn(
                        "inline-block px-5 py-2.5 rounded-2xl text-[13px] font-bold text-white transition-all shadow-sm",
                        item.status === "Success"
                          ? "bg-[#6cc196] shadow-[0_4px_10px_rgba(108,193,150,0.4)]"
                          : "bg-[#c8371d] shadow-[0_4px_10px_rgba(200,55,29,0.4)]",
                      )}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {pagination && pagination.totalPages > 1 && (
          <div className="flex items-center justify-end gap-2.5 mt-4">
            {/* First Page */}
            <button
              onClick={() => handlePageChange(1)}
              className={cn(
                "w-10 h-10 flex items-center justify-center rounded-xl font-bold text-sm transition-all",
                page === 1
                  ? "bg-[#008bf5] text-white shadow-[0_4px_12px_rgba(0,139,245,0.4)]"
                  : "bg-slate-50 text-slate-400 hover:bg-slate-100",
              )}
            >
              01
            </button>

            {/* Middle Pages */}
            {Array.from({ length: Math.min(3, pagination.totalPages - 2) }, (_, i) => {
              const p = i + 2;
              return (
                <button
                  key={p}
                  onClick={() => handlePageChange(p)}
                  className={cn(
                    "w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all",
                    page === p
                      ? "bg-white border-2 border-slate-100 text-slate-800"
                      : "bg-slate-50 text-slate-400 hover:bg-slate-100",
                  )}
                >
                  0{p}
                </button>
              );
            })}

            {pagination.totalPages > 5 && (
              <div className="px-1 text-slate-300 font-bold">...</div>
            )}

            {/* Next Button */}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === pagination.totalPages}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 disabled:opacity-50 disabled:cursor-not-allowed group"
            >
              <ArrowIcon className="w-4 h-4 rotate-180 group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Last Page */}
            {pagination.totalPages > 1 && pagination.totalPages !== page && page < pagination.totalPages - 3 && (
               <button
               onClick={() => handlePageChange(pagination.totalPages)}
               className="w-10 h-10 flex items-center justify-center rounded-xl bg-slate-50 text-slate-400 hover:bg-slate-100 text-sm font-bold"
             >
               {pagination.totalPages < 10 ? `0${pagination.totalPages}` : pagination.totalPages}
             </button>
            )}
            
            {/* If we are on the last page or near it, show it properly */}
             {(page === pagination.totalPages || (page >= pagination.totalPages -3 && pagination.totalPages > 1)) && (
                <button
                onClick={() => handlePageChange(pagination.totalPages)}
                className={cn(
                  "w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all",
                  page === pagination.totalPages
                    ? "bg-[#008bf5] text-white shadow-[0_4px_12px_rgba(0,139,245,0.4)]"
                    : "bg-slate-50 text-slate-400 hover:bg-slate-100",
                )}
              >
                {pagination.totalPages < 10 ? `0${pagination.totalPages}` : pagination.totalPages}
              </button>
             )}
          </div>
        )}
      </div>
    </div>
  );
};
