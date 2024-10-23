import { AppShell, Burger, Button, ColorPicker, Drawer, Group, Skeleton, Stepper, Text, useMantineTheme } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

const Home = () => {
  const theme = useMantineTheme();
  const [openedbargar, { toggle }] = useDisclosure();
  const [opened, { open, close }] = useDisclosure(false);
  const [value, onChange] = useState('rgba(47, 119, 150, 0.7)');
  const [active, setActive] = useState(1);
  const nextStep = () => setActive((current) => (current < 3 ? current + 1 : current));
  const prevStep = () => setActive((current) => (current > 0 ? current - 1 : current));

  return (
    <div>
      <AppShell padding="md" navbarOffsetBreakpoint="sm" asideOffsetBreakpoint="sm">
        {/* Header */}
        <AppShell.Header height={60} p="md">
          <Group h="100%" px="md">
          <Burger lineSize={7}  size="xl" opened={openedbargar} onClick={toggle} aria-label="Toggle navigation" />
          </Group>
        </AppShell.Header>

        {/* Navbar */}
        <AppShell.Navbar
          width={{ base: 300 }}
          hiddenBreakpoint="sm" // Navbar will be hidden below 'sm' breakpoint
          hidden={!opened} // Only hidden on mobile, toggled by Burger
          p="md"
          style={{
            backgroundColor:
              theme.colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[1],
          }}
        >
          Navbar
          {Array(15)
            .fill(0)
            .map((_, index) => (
              <Skeleton key={index} height={100} mt="sm" animate={false} />
            ))}
        </AppShell.Navbar>

        {/* Main content */}
        
        <AppShell.Main>Main</AppShell.Main>
      </AppShell>

      <ColorPicker
      format="hex"
      swatches={['#2e2e2e', '#868e96', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#82c91e', '#fab005', '#fd7e14']}
    />

      <Drawer opened={opened} onClose={close} title="Authentication">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, ad non labore totam sint quidem magni architecto, voluptate ratione iusto illum quibusdam impedit reprehenderit veritatis laboriosam assumenda quod dolorum laborum eaque. Sint, quae cupiditate, tenetur aliquam iure non tempora explicabo laudantium atque quisquam accusamus omnis eaque dolorum. Ducimus ipsum architecto nihil distinctio a hic consequuntur enim quibusdam voluptatem laudantium repellat vero vel maiores recusandae dolore repudiandae nisi numquam nesciunt delectus ut voluptatibus, dignissimos quidem. Sequi illum nulla corporis. Magnam corporis quia sapiente itaque ipsa tempore deserunt illo sed laudantium veniam reiciendis sunt eum dolores deleniti culpa consectetur, explicabo commodi facilis.</p>
      </Drawer>

      <Button onClick={open}>Open Drawer</Button>


      <ColorPicker format="rgba" value={value} onChange={onChange} />
      <Text>{value}</Text>

      <Stepper active={active} onStepClick={setActive}>
        <Stepper.Step label="First step" description="Create an account">
          Step 1 content: Create an account
        </Stepper.Step>
        <Stepper.Step label="Second step" description="Verify email">
          Step 2 content: Verify email
        </Stepper.Step>
        <Stepper.Step label="Final step" description="Get full access">
          Step 3 content: Get full access
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>

      <Group justify="center" mt="xl">
        <Button variant="default" onClick={prevStep}>Back</Button>
        <Button onClick={nextStep}>Next step</Button>
      </Group>

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
