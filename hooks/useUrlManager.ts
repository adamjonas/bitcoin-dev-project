import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { FILTERTAGS } from "@/utils"

export const useUrlManager = () => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const urlParams = new URLSearchParams(searchParams)

    const addFilterParam = (key: string, value: string) => {
        const filterGroup = urlParams.getAll(key)
        if (filterGroup.includes(value)) return
        if (key) {
            urlParams.append(key, value)
        }

        router.push(`${pathname}?${urlParams.toString()}`)
    }

    const addSortParam = (key: string, value: string) => {
        const filterGroup = urlParams.getAll(key)
        if (filterGroup.includes(value)) return
        if (key) {
            urlParams.set(key, value)
        }

        router.push(`${pathname}?${urlParams.toString()}`)
    }

    const sortKey = urlParams.get("sort")

    const searchQuery = urlParams.get("search")

    const addSearchQuery = (value: string) => {
        if (value) {
            urlParams.set("search", value)
        } else {
            urlParams.delete("search")
        }

        router.push(`${pathname}?${urlParams.toString()}`)
    }

    const deleteFilterParam = (key: string, value: string) => {
        const filterGroup = urlParams.getAll(key)
        if (!filterGroup.includes(value)) return

        urlParams.delete(key, value)
        router.push(`${pathname}?${urlParams.toString()}`)
    }

    const clearAllFilters = () => {
        const allKeys = FILTERTAGS.flatMap((key) => {
            if (!urlParams.has(key)) {
                return []
            }

            return urlParams.getAll(key).map((val) => ({ key, filter: val }))
        })

        allKeys.map((val) => urlParams.delete(val.key, val.filter))
        router.push(`${pathname}?${urlParams.toString()}`)
    }

    const currentFilterValuesAndKeys = FILTERTAGS.flatMap((key) => {
        if (!urlParams.has(key)) {
            return []
        }

        return urlParams.getAll(key).map((val) => ({ key, filter: val }))
    })

    const currentFilterValues = FILTERTAGS.flatMap((key) => {
        if (!urlParams.has(key)) {
            return []
        }

        return urlParams.getAll(key)
    })

    return {
        addFilterParam,
        currentFilterValues,
        currentFilterValuesAndKeys,
        deleteFilterParam,
        clearAllFilters,
        addSortParam,
        sortKey,
        searchQuery,
        addSearchQuery,
        urlParams
    }
}
