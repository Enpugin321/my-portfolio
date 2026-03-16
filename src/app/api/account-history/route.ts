import { NextResponse } from 'next/server';

const generateMockData = (type: string, page: number, limit: number) => {
  const total = 50; // Total 50 items
  const statusOptions = ['Success', 'Success', 'Rejected', 'Success', 'Success'];
  
  const start = (page - 1) * limit;
  const items = Array.from({ length: Math.min(limit, total - start) }, (_, i) => {
    const id = start + i + 1;
    return {
      id,
      amount: `${(type === 'deposit' ? 1000 : 500) + id * 10}`,
      price: "$ 1,25",
      usdt: `${(type === 'deposit' ? 2000 : 1000) + id * 20} USDT`,
      txId: `sdknf23csd....23nsj${100 + id}`,
      time: `15.05.2025 14:${(10 + id) % 60 < 10 ? '0' : ''}${(10 + id) % 60}`,
      status: statusOptions[id % statusOptions.length],
    };
  });

  return {
    items,
    pagination: {
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
    }
  };
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const type = searchParams.get('type') || 'deposit';
  const page = parseInt(searchParams.get('page') || '1', 10);
  const limit = parseInt(searchParams.get('limit') || '5', 10);

  const data = generateMockData(type, page, limit);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json(data);
}
