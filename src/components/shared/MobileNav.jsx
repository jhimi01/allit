import {
  Box,
  Burger,
  Button,
  Dialog,
  Drawer,
  Group,
  Image,
  Text,
  TextInput,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IoCartOutline, IoSearch } from "react-icons/io5";

const MobileNav = () => {
  const [openedDrawer, { open: openDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [openedSearch, { toggle: toggleSearch, close: closeSearch }] =
    useDisclosure(false);

  return (
    <div className="bg-dark text-white">
      <Drawer
        opened={openedDrawer}
        onClose={closeDrawer}
        title="Categories"
        position="left"
        size="80%"
      >
        {/* Drawer content */}
      </Drawer>

      <div className="px-2 flex items-center justify-between mx-auto">
        <Burger
          lineSize={2}
          size="md"
          color="#fff"
          opened={openedDrawer}
          onClick={openDrawer}
          aria-label="Toggle navigation"
        />

        <Image src="./all-it.webp" w={70} h={65} />

        <Box className="text-2xl flex">
          <IoCartOutline />
          <Group justify="center">
            <Button onClick={toggleSearch}>
              <IoSearch className="text-white mr-2" />
            </Button>
          </Group>

          <Dialog
            opened={openedSearch}
            withCloseButton
            onClose={closeSearch}
            size="lg"
            radius="md"
          >
            <Text size="sm" mb="xs" fw={500}>
              Subscribe to email newsletter
            </Text>

            <Group align="flex-end">
              <TextInput
                placeholder="hello@gluesticker.com"
                style={{ flex: 1 }}
              />
              <Button onClick={closeSearch}>Subscribe</Button>
            </Group>
          </Dialog>
        </Box>
      </div>
    </div>
  );
};

export default MobileNav;
