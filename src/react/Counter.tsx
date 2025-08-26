/* Твоя задача:

   1. Напиши компонент Counter на React.
   2. Он должен иметь:
      - Текущее значение count
      - Минимальное значение min
      - Максимальное значение max
   3. Кнопки "Increment" и "Decrement" должны увеличивать и уменьшать count,
      при этом count не выходит за пределы min и max.
   4. Компонент должен вести историю изменений count.
      - История отображается на экране в виде списка.
      - При нажатии на элемент истории count меняется на выбранное значение.
      - Каждое изменение (через кнопки или выбор из истории) добавляется в историю.
   5. Используй функциональные компоненты и hooks (useState).

   Пример интерфейса:
   [ Decrement ] [ Increment ]  Count: 3
   История:
   - 1
   - 2
   - 3
*/

import { createRoot } from "react-dom/client";

function Counter() {
  console.log("Counter is ready");

  return null;
}

const root = document.getElementById("app") as HTMLElement;

createRoot(root).render(<Counter />);
