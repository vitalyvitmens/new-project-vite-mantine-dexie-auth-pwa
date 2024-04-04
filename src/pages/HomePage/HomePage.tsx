import { useState } from 'react'
import todoLogo from '../../assets/todo.png'
import {
  Anchor,
  Button,
  Center,
  Container,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { Colors } from '../../constants/colors'
import { externalLinks } from '../../constants/externalLinks'

export const HomePage = () => {
  const [count, setCount] = useState(0)
  const theme = useMantineTheme()
  const textShadowMD = theme.shadows.md

  return (
    <Container>
      <Center>
        <Anchor
          href={externalLinks.GithubProfile}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={todoLogo} alt="ToDo" style={{ width: '230px' }} />
        </Anchor>
      </Center>
      <Container c={Colors.tan} ta="center">
        <Title c={Colors.primary} style={{ textShadow: textShadowMD }}>
          Hello, Mantine!
        </Title>
        <Text c={Colors.primary}>Your primary color is {Colors.primary}</Text>
        <Button color="primary">This button has the todo color</Button>
      </Container>

      <Center>
        <Title size="4rem" c={Colors.blue}>
          ToDo
        </Title>
      </Center>
      <Center color={Colors.red}>
        <Button
          variant="default"
          bg={Colors.green}
          onClick={() => setCount((count) => count + 1)}
        >
          <Text c={Colors.brown} size="1.5rem" fw={700}>
            count is:
            <span
              style={{
                fontWeight: 'bold',
                fontSize: '1.75rem',
                paddingLeft: '1rem',
                color: Colors.red,
              }}
            >
              {count}
            </span>
          </Text>
        </Button>
      </Center>
      <Container
        fw={800}
        ta="center"
        size="responsive"
        bg="var(--mantine-color-blue-light)"
        c={Colors.tan}
      >
        Edit <code>src/App.tsx</code> and save to test HMR
      </Container>
      <Center h={100} p={20} mt={-15}>
        <Text
          c={Colors.red}
          size="xl"
          fw={800}
          fs="italic"
          td="underline"
          ta="center"
        >
          Click on the Vite and React logos to learn more
        </Text>
      </Center>
    </Container>
  )
}
