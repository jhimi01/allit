import { Menu, Button } from "@mantine/core";
import classes from "./Categories.module.css";

import categoryData from "./categoryData .js";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Categories = () => {
  return (
    <div className="space-x-1 sticky top-0 left-0">
      {categoryData.map((category, index) => (
        <Menu
          key={index}
          trigger="hover"
          offset={15}
          arrowPosition="center"
          shadow="md"
        >
          <Menu.Target>
            <Link to={category?.path}>
              <Button>
                {category?.label}
                <IoIosArrowDown className="ml-1 text-bluegray text-xs" />
              </Button>
            </Link>
          </Menu.Target>

          <Menu.Dropdown
            classNames={{
              dropdown: classes.dropdown,
            }}
            style={{
              backgroundColor: "#fff", // Ensure this is set directly
              padding: "10px", // Add padding for consistent background fill
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)", // Optional shadow for contrast
              borderRadius: "4px", // Optional border radius for styling
              overflowY: "auto", // Allow scroll if items exceed max height
              maxHeight: "calc(8 * 50px)", // Constrain height to 8 rows
            }}
            className={classes.menuDropdown}
          >
            {category?.items.map((categoryitem, index) => (
              <Menu.Item
                className={classes.menuDropdownitems}
                style={{
                  color: "#808080",
                  fontSize: "18px",
                  fontWeight: "600",
                }}
                key={index}
              >
                {categoryitem.itemsLabel}
              </Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      ))}
    </div>
  );
};

export default Categories;
