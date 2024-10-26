import { v4 as uuid } from "uuid";
import { NotificationProps } from "types";

export const NotificationItems: NotificationProps[] = [
  {
    id: uuid(),
    sender: "Rishi Chopra",
    message: `Mauris blandit erat id nunc blandit, ac eleifend dolor pretium.`,
  },
  {
    id: uuid(),
    sender: "Neha Kannned",
    message: `Proin at elit vel est condimentum elementum id in ante. Maecenas et sapien metus.`,
  },
  {
    id: uuid(),
    sender: "Nirmala Chauhan",
    message: `Morbi maximus urna lobortis elit sollicitudin sollicitudieget elit vel pretium.`,
  },
  {
    id: uuid(),
    sender: "Sina Ray",
    message: `Sed aliquam augue sit amet mauris volutpat hendrerit sed nunc eu diam.`,
  },
];
