import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Printer } from "lucide-react"

export default function BananaCoffeeCake() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="overflow-hidden">
        <div className="relative h-64 sm:h-80 md:h-96">
          <Image
            src="/placeholder.svg?height=600&width=800"
            alt="Banana Coffee Cake with streusel topping"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="p-6 md:p-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Banana Coffee Cake</h1>
              <p className="text-muted-foreground">A moist and delicious cake with cinnamon streusel topping</p>
            </div>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Printer className="h-4 w-4" />
              <span className="hidden sm:inline">Print Recipe</span>
            </Button>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-3 pb-2 border-b">Details</h2>
                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <p className="text-sm text-muted-foreground">Prep Time</p>
                    <p className="font-medium">15 minutes</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Cook Time</p>
                    <p className="font-medium">45 minutes</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Total Time</p>
                    <p className="font-medium">1 hour</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Servings</p>
                    <p className="font-medium">12 slices</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-3 pb-2 border-b">Ingredients</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-medium mb-2">For the Streusel Topping:</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>1/2 cup all-purpose flour</li>
                      <li>1/2 cup packed brown sugar</li>
                      <li>1 teaspoon ground cinnamon</li>
                      <li>1/4 teaspoon salt</li>
                      <li>1/4 cup cold unsalted butter, cubed</li>
                      <li>1/2 cup chopped walnuts (optional)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">For the Cake:</h3>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>2 cups all-purpose flour</li>
                      <li>1 teaspoon baking soda</li>
                      <li>1 teaspoon baking powder</li>
                      <li>1/2 teaspoon salt</li>
                      <li>1/2 cup unsalted butter, softened</li>
                      <li>1 cup granulated sugar</li>
                      <li>2 large eggs</li>
                      <li>1 teaspoon vanilla extract</li>
                      <li>1 cup sour cream</li>
                      <li>3 ripe bananas, mashed (about 1 1/2 cups)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <h2 className="text-xl font-semibold mb-3 pb-2 border-b">Instructions</h2>
              <ol className="list-decimal list-outside ml-5 space-y-4">
                <li>
                  <p className="font-medium">Preheat the oven to 350°F (175°C).</p>
                  <p className="text-sm text-muted-foreground">
                    Grease and flour a 9x13 inch baking pan or spray with non-stick baking spray.
                  </p>
                </li>

                <li>
                  <p className="font-medium">Prepare the streusel topping:</p>
                  <p className="text-sm text-muted-foreground">
                    In a medium bowl, mix together flour, brown sugar, cinnamon, and salt. Cut in the cold butter using
                    a pastry cutter or your fingers until the mixture resembles coarse crumbs. Stir in walnuts if using.
                    Set aside in the refrigerator while preparing the cake batter.
                  </p>
                </li>

                <li>
                  <p className="font-medium">Make the cake batter:</p>
                  <p className="text-sm text-muted-foreground">
                    In a medium bowl, whisk together flour, baking soda, baking powder, and salt. Set aside.
                  </p>
                </li>

                <li>
                  <p className="font-medium">Cream the butter and sugar:</p>
                  <p className="text-sm text-muted-foreground">
                    In a large bowl, beat the butter and granulated sugar until light and fluffy, about 2-3 minutes. Add
                    eggs one at a time, beating well after each addition. Stir in vanilla extract.
                  </p>
                </li>

                <li>
                  <p className="font-medium">Combine wet and dry ingredients:</p>
                  <p className="text-sm text-muted-foreground">
                    Add the dry ingredients to the butter mixture alternately with the sour cream, beginning and ending
                    with the dry ingredients (3 additions of dry, 2 of sour cream). Mix just until combined after each
                    addition. Fold in the mashed bananas.
                  </p>
                </li>

                <li>
                  <p className="font-medium">Assemble and bake:</p>
                  <p className="text-sm text-muted-foreground">
                    Pour the batter into the prepared pan and spread evenly. Sprinkle the streusel topping over the
                    batter.
                  </p>
                </li>

                <li>
                  <p className="font-medium">Bake for 40-45 minutes:</p>
                  <p className="text-sm text-muted-foreground">
                    Bake until a toothpick inserted in the center comes out clean or with a few moist crumbs. The top
                    should be golden brown and the cake should spring back when lightly touched.
                  </p>
                </li>

                <li>
                  <p className="font-medium">Cool before serving:</p>
                  <p className="text-sm text-muted-foreground">
                    Allow the cake to cool in the pan for at least 20 minutes before slicing. Serve warm or at room
                    temperature.
                  </p>
                </li>
              </ol>

              <div className="mt-8 p-4 bg-muted rounded-lg">
                <h3 className="font-semibold mb-2">Recipe Notes</h3>
                <ul className="list-disc list-inside space-y-2 text-sm">
                  <li>For the best flavor, use very ripe bananas with lots of brown spots.</li>
                  <li>You can substitute Greek yogurt for the sour cream if desired.</li>
                  <li>
                    Store leftover cake covered at room temperature for up to 3 days, or refrigerate for up to a week.
                  </li>
                  <li>This cake freezes well! Wrap individual slices tightly and freeze for up to 3 months.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}

