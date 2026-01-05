export const lookbookItems = [
  {
    id: "1",
    title: "URBAN SHADOWS",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=1200&q=80",
    description: "Exploring the contrast between light and darkness in modern streetwear."
  },
  {
    id: "2",
    title: "CONCRETE JUNGLE",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=1200&q=80",
    description: "Raw textures and bold silhouettes against urban landscapes."
  },
  {
    id: "3",
    title: "MIDNIGHT EDIT",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=1200&q=80",
    description: "After-dark aesthetics captured in motion and stillness."
  },
  {
    id: "4",
    title: "VOID COLLECTION",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80",
    description: "Embracing minimalism through absence of color."
  },
  {
    id: "5",
    title: "STREET POETRY",
    image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=1200&q=80",
    description: "Where fashion meets the rhythm of the city."
  },
  {
    id: "6",
    title: "SILENT MOTION",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=1200&q=80",
    description: "Capturing elegance in movement and form."
  }
];

export const getLookbookItem = (id) => {
  return lookbookItems.find(item => item.id === id);
};
