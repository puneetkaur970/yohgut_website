export default function MenuAvailabilityNote({ className = '' }) {
  return (
    <section
      aria-labelledby="important-information-heading"
      className={`border-t border-outline-variant/50 pt-6 text-body-sm text-on-surface-variant ${className}`}
    >
      <h2
        id="important-information-heading"
        className="mb-4 text-body-md font-semibold text-on-background"
      >
        Important Information
      </h2>
      <div className="flex flex-col gap-4">
        <p>
          <span className="font-semibold text-on-background">Flavours &amp; Toppings: </span>
          Our selection of flavours and toppings is refreshed regularly. Availability may
          vary, and some options may not be available at all times.
        </p>
        <p>
          <span className="font-semibold text-on-background">Allergen Information: </span>
          All our products are prepared in a shared kitchen using common preparation areas
          and equipment. While we take care in handling ingredients, cross-contact with
          allergens may occur. If you have any food allergies or dietary concerns, please
          contact us before placing your order.
        </p>
      </div>
    </section>
  )
}
