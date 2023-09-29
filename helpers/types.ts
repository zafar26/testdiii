import { useState } from 'react'

// Announcement Type & Its State Declaration
export type AnnouncementSetState = React.Dispatch<
    React.SetStateAction<any[]>
> & { readonly __brand_setState__: unique symbol }

export function useAnnouncementState(init: any[]) {
    return useState<any[]>(init) as [any[], AnnouncementSetState]
}
export type Env = {
    base_url: string
    token: string
    discordUrl?: string
}