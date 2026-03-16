import * as React from "react";
import { cn } from "@/lib/utils";
import styles from "./StatCard.module.scss";

const StatCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.statCard, className)} {...props} />
));
StatCard.displayName = "StatCard";

const StatCardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn(styles.title, className)} {...props} />
));
StatCardTitle.displayName = "StatCardTitle";

const StatCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.content, className)} {...props} />
));
StatCardContent.displayName = "StatCardContent";

const StatCardIconWrapper = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.iconWrapper, className)} {...props} />
));
StatCardIconWrapper.displayName = "StatCardIconWrapper";

const StatCardInfo = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.info, className)} {...props} />
));
StatCardInfo.displayName = "StatCardInfo";

const StatCardValue = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3 ref={ref} className={cn(styles.value, className)} {...props} />
));
StatCardValue.displayName = "StatCardValue";

const StatCardMessage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn(styles.message, className)} {...props} />
));
StatCardMessage.displayName = "StatCardMessage";

export {
  StatCard,
  StatCardTitle,
  StatCardContent,
  StatCardIconWrapper,
  StatCardInfo,
  StatCardValue,
  StatCardMessage,
};
