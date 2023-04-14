import { deckOfCards } from "./deck.js";
import { prettify } from "./lib/prettify.js";

function main() {
  alert(prettify(deckOfCards));
}

main();
