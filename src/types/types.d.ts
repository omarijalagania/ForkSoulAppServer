export type UserSchemaProps = {
  user_name: string
  password: string
  confirmPassword?: string
}

export type BandMemberProps = {
  name: string
  instrument: string
  orbitLength: number
  color: string
  biography: string
  avatar: string
}

export type SocialNetworkProps = {
  name: string
  socialLink: string
}

export type PropsPrompt = {
  name: string
  hidden: boolean
  replace: string
}
