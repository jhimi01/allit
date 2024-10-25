import {  Menu, Button } from "@mantine/core";

import categoryData from "./categoryData .js";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Categories = () => {
  return (
    <div className="space-x-1">
      {categoryData.map((category, index) => (
        <Menu key={index} trigger="hover" offset={15}  arrowPosition="center" shadow="md" width={150}>
          <Menu.Target>
            <Link to={category?.path}>
              <Button>{category?.label} <IoIosArrowDown className="ml-1 text-bluegray text-xs" /></Button>
            </Link>
          </Menu.Target>

          <Menu.Dropdown>
            {category?.items.map((categoryitem, index) => (
              <Menu.Item key={index}>{categoryitem.itemsLabel}</Menu.Item>
            ))}
          </Menu.Dropdown>
        </Menu>
      ))}
    </div>
  );
};

export default Categories;
