"use client";
import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function TwoLineSkeleton() {
    return (
        <SkeletonTheme baseColor="#ddd" highlightColor="#f5f5f5">
            <Skeleton height={20} width={300} />
            <Skeleton height={15} width={300} />
            <Skeleton height={15} width={150} />
        </SkeletonTheme>
    )
}
export default TwoLineSkeleton