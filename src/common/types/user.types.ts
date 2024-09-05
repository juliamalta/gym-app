export interface ISignInForm {
    email: string
    password: string
}

export interface IAuthViewer {
    id: number
    name: string
    login: string
    avatar: {
        url?: string | null
        initials: string
    }
}
