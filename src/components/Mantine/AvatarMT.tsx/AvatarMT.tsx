import { Avatar, Box, Group } from '@mantine/core'

interface AvatarMTProps {
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  m?: string | number
  p?: string | number
  variant?: string
  radius?: string | number
  size?: string | number
  color?: string
  src?: string
  alt?: string
}
export const AvatarMT: React.FC<AvatarMTProps> = ({
  justify = 'center',
  m = 'none',
  p = 'none',
  variant = 'transparent',
  radius = '50%',
  size = '100px',
  color = 'blue',
  src = 'https://github.com/vitalyvitmens/new-project-vite-mantine-dexie-auth-pwa/blob/main/src/assets/sadSmiley.jpg?raw=true',
  alt = "it's me",
}) => {
  return (
    <Group justify={justify}>
      <Box m={m} p={p}>
        <Avatar
          variant={variant}
          radius={radius}
          size={size}
          color={color}
          src={src}
          alt={alt}
        />
      </Box>
    </Group>
  )
}
