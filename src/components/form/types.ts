/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react'
import { Control, UseControllerProps } from 'react-hook-form'

export type FormInputType = {
    label?: string
    icon?: JSX.Element | FC<{ color?: string; size?: number }> | null
    placeholder?: string
    helperText?: string
    control: Control<any, any>
    textContentType?:
        | 'none'
        | 'URL'
        | 'addressCity'
        | 'addressCityAndState'
        | 'addressState'
        | 'countryName'
        | 'creditCardNumber'
        | 'emailAddress'
        | 'familyName'
        | 'fullStreetAddress'
        | 'givenName'
        | 'jobTitle'
        | 'location'
        | 'middleName'
        | 'name'
        | 'namePrefix'
        | 'nameSuffix'
        | 'nickname'
        | 'organizationName'
        | 'postalCode'
        | 'streetAddressLine1'
        | 'streetAddressLine2'
        | 'sublocality'
        | 'telephoneNumber'
        | 'username'
        | 'password'
        | 'newPassword'
        | 'oneTimeCode'
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
} & Omit<UseControllerProps, 'shouldUnregister' | 'control'>
