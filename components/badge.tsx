import React from "react"
import clsx from "clsx"
import { useUrlManager } from "@/hooks/useUrlManager"

const Badge = ({
    name,
    className,
    keys
}: {
    name: string
    className?: string
    keys: Array<{ [key: string]: string }>
}) => {
    const { addBadgeFilterParam } = useUrlManager()
    const isSelected = keys
        ?.map((value) => value.filter.toLowerCase())
        .includes(name.toLowerCase())

    return (
        <div
            className={clsx(
                `inline-flex w-fit items-center whitespace-nowrap rounded-full font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:border-[1.5px] hover:border-gray-600 bg-gray-100 text-gray-600 hover:bg-gray-100/80 px-2 py-1 text-xs cursor-pointer ${isSelected ? "border-gray-600 text-black bg-gray-200 border-[1.5px]" : ""}`,
                className
            )}
            onClick={() => addBadgeFilterParam("languages", name)}
            data-umami-event={`${name}-badge-filter-clicked`}
        >
            {name}
        </div>
    )
}

export default Badge
