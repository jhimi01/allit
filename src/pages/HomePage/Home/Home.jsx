import { AppShell, Checkbox, Burger, MultiSelect, Box, Group, Button, Collapse, Text } from "@mantine/core";

import { useDisclosure } from "@mantine/hooks";

const Home = () => {
  const [opened, { toggle }] = useDisclosure();

  return (
    <div>
       <Box maw={400} mx="auto">
      <Group justify="center" mb={5}>
        <Button onClick={toggle}>Toggle content</Button>
      </Group>

      <Collapse in={opened}>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cupiditate explicabo, corporis laborum, exercitationem inventore dignissimos facilis aut ipsa quo quis assumenda, enim numquam laudantium distinctio pariatur minima vel qui provident aliquam. Repellendus culpa asperiores ducimus autem magnam quis, dolor corrupti suscipit voluptatem a alias exercitationem omnis error perspiciatis aspernatur, adipisci sunt ex sequi. Vitae impedit dignissimos iure excepturi labore! Consequuntur laborum vero optio, possimus, delectus voluptatibus totam iste atque expedita eos, hic amet! Sint voluptatum sed repellendus adipisci cupiditate expedita velit animi doloribus exercitationem. Est sunt deleniti repellat aperiam officia fuga mollitia. Maiores dignissimos tempora quis facilis quidem molestiae.</Text>
      </Collapse>
    </Box>
     
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Checkbox defaultChecked label="I agree to sell my privacy" />

      <MultiSelect
      label="Your favorite libraries"
      placeholder="Pick value"
      data={['React', 'Angular', 'Vue', 'Svelte']}
    />
    </div>
  );
};

export default Home;
