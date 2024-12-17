import { GRID_IMAGES } from './constants/gridImages';

// Get an image for a specific menu item
export function getImageForItem(index: number): string {
  return GRID_IMAGES[index % GRID_IMAGES.length];
}

// Get a subset of images for a grid
export function getGridImages(count: number): string[] {
  return Array.from({ length: count }, (_, i) => getImageForItem(i));
}

// Get a random image from the grid images
export function getRandomGridImage(): string {
  const randomIndex = Math.floor(Math.random() * GRID_IMAGES.length);
  return GRID_IMAGES[randomIndex];
}