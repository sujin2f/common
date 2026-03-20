interface NavigationEntry {
    // Docs: https://electronjs.org/docs/api/structures/navigation-entry

    /**
     * A base64 encoded data string containing Chromium page state including
     * information like the current scroll position or form values. It is committed by
     * Chromium before a navigation event and on a regular interval.
     */
    pageState?: string
    title: string
    url: string
}

// To send url & title via IPC
export type T_Bookmark_Partial = {
    url: string
    title: string
}

// ⚓️ Anchor
export type T_Anchor = T_Bookmark_Partial & {
    uid: number
    id: string
}

// 🔖 Bookmark
export type T_Bookmark = T_Anchor &
    NavigationEntry & {
        uid?: number
        shortcut?: string
        parent?: string
        dir?: boolean
    }

/**
 * @deprecated
 */
export type T_Focus_Message = {
    _id: string
    title: string
    key: string
    device: string
    machineId: string
    type: 'bookmark' | 'keystroke'
    message: string
}

export type T_Focus_Device = {
    _id: string
    device: string
    machineId: string
}
