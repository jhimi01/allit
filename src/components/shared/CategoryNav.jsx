import Categories from '../categories/Categories'

function CategoryNav() {
  return (
    <div
    className="sticky top-0 z-[100] py-[12px] bg-white w-full"
    style={{
      boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 20px 0px",
    }}
  >
    <div className="w-11/12 mx-auto">
      <Categories />
    </div>
  </div>
  )
}

export default CategoryNav;
