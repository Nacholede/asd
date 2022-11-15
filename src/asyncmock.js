import productos from "../src/productos/productos";


function getItems(idCategory) {
  return new Promise((resolve) => {
    if (idCategory === undefined) {
      setTimeout(() => {
        resolve(productos);
      }, 2000);
    } else {
      setTimeout(() => {
        let itemsRequested = productos.filter(
          (item) => item.category === idCategory
        );
        resolve(itemsRequested);
      }, 2000);
    }
  });
}

export function getSingleItem(idParam) {
  return new Promise((resolve, reject) => {
    let itemRequested = productos.find((item) => item.id === Number(idParam));

    if (itemRequested === undefined) reject("Item no encontrado");

    setTimeout(() => {
      resolve(itemRequested);
    }, 2000);
  });
}

export default getItems;