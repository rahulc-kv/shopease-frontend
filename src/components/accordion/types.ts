export type AccordianProps = {
  faq: {
    id: number;
    text: string;
    answer: string;
  };
  isOpen: boolean;
  onClick: () => void;
};
