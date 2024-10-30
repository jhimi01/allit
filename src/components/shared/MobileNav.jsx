import { Burger, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

const MobileNav = () => {
  // const [opened, { toggle }] = useDisclosure();
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <div className="bg-dark text-white">
      <Drawer opened={opened} onClose={close} title="Categories" position="left" size="80%">
        {/* Drawer content */}
      </Drawer>

      <div className="px-2 mx-auto py-5">
        <Burger
          lineSize={2}
          size="md"
          color="#fff"
          opened={opened}
          onClick={open}
          aria-label="Toggle navigation"
        />
        this is a mobile nav bar
      </div>
    </div>
  );
};

export default MobileNav;
