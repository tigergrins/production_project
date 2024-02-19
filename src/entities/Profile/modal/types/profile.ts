import { Country, Currency } from "shared/const/common"

export interface Profile {
	name: string
	lastname: string
	age: number
	country: Country
	currency: Currency
	city: string
	username: string
	avatar: string
}

export interface ProfileSchema {
	data?: Profile
	isLoading: boolean
	error?: string
	readonly: boolean
}
