import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

export default function BananaCoffeeCake() {
  return (
    <Card className="w-full max-w-3xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl">Banana Coffee Cake</CardTitle>
        <CardDescription>
          A moist and flavorful banana coffee cake with a cinnamon streusel topping - perfect for using up ripe bananas!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="font-medium text-lg mb-2">Ingredients</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <h4 className="font-medium">For the cake:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>2 cups all-purpose flour</li>
                <li>1 teaspoon baking soda</li>
                <li>1 teaspoon baking powder</li>
                <li>1/2 teaspoon salt</li>
                <li>1/2 cup unsalted butter, softened</li>
                <li>1 cup granulated sugar</li>
                <li>2 large eggs</li>
                <li>1 teaspoon vanilla extract</li>
                <li>1/3 cup sour cream</li>
                <li>3 very ripe bananas, mashed (about 1 1/2 cups)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-medium">For the streusel topping:</h4>
              <ul className="list-disc pl-5 space-y-1">
                <li>1/2 cup all-purpose flour</li>
                <li>1/2 cup brown sugar, packed</li>
                <li>1 teaspoon ground cinnamon</li>
                <li>1/4 teaspoon salt</li>
                <li>1/4 cup cold unsalted butter, cubed</li>
                <li>1/2 cup chopped walnuts or pecans (optional)</li>
              </ul>
            </div>
          </div>
        </div>

        <Separator />

        <div>
          <h3 className="font-medium text-lg mb-2">Instructions</h3>
          <ol className="list-decimal pl-5 space-y-3">
            <li>Preheat your oven to 350°F (175°C). Grease and flour a 9×13-inch baking pan.</li>
            <li>In a medium bowl, whisk together the flour, baking soda, baking powder, and salt. Set aside.</li>
            <li>In a large bowl, cream together the butter and sugar until light and fluffy, about 3 minutes.</li>
            <li>Beat in the eggs one at a time, then stir in the vanilla extract.</li>
            <li>Mix in the mashed bananas and sour cream until well combined.</li>
            <li>Gradually stir the dry ingredients into the banana mixture just until incorporated. Do not overmix.</li>
            <li>Pour the batter into the prepared baking pan and spread evenly.</li>
            <li>
              For the streusel topping: In a small bowl, mix together the flour, brown sugar, cinnamon, and salt. Cut in
              the cold butter using a pastry cutter or your fingers until the mixture resembles coarse crumbs. Stir in
              the nuts if using.
            </li>
            <li>Sprinkle the streusel topping evenly over the cake batter.</li>
            <li>Bake for 35-40 minutes, or until a toothpick inserted into the center comes out clean.</li>
            <li>Allow the cake to cool in the pan for at least 15 minutes before serving.</li>
          </ol>
        </div>

        <Separator />

        <div>
          <h3 className="font-medium text-lg mb-2">Notes</h3>
          <ul className="list-disc pl-5 space-y-1">
            <li>For the best flavor, use very ripe bananas with lots of brown spots.</li>
            <li>You can add 1/2 cup of chocolate chips to the batter for a chocolate banana variation.</li>
            <li>Store covered at room temperature for up to 3 days or refrigerate for up to a week.</li>
            <li>
              This cake freezes well for up to 3 months. Wrap individual slices tightly in plastic wrap and aluminum
              foil.
            </li>
          </ul>
        </div>
      </CardContent>
    </Card>
  )
}

