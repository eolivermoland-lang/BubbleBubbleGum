import { PayPalButtons } from "@paypal/react-paypal-js";

export default function Cartp({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section>
      <div className="py-10 flex justify-center">
        <div className="bg-linear-to-tl from-pink-300 to-pink-700 md:w-[60%] w-[80%] p-6 rounded-xl">

          <h1 className="font-bold md:text-5xl text-3xl text-green-300 text-center mb-10">
            🛒 Cart
          </h1>

          {/* PRODUKTER (denne delen manglet hos deg nå) */}
          {cart.length === 0 ? (
            <p className="text-center text-white">Cart is empty</p>
          ) : (
            <div className="flex flex-col gap-4">
              {cart.map((item, i) => (
                <div
                  key={i}
                  className={`p-4 rounded-lg flex justify-between items-center md:w-[60%] mx-auto hover:scale-105 transition duration-300 bg-linear-to-tl ${item.color}`}
                >
                  <div className="text-white">
                    <h2 className="font-bold">{item.name}</h2>
                    <p>{item.desc}</p>
                    <p className="font-bold">{item.price} kr</p>
                  </div>

                  <img
                    src={item.img}
                    className="w-16 h-16 object-cover rounded-4xl"
                  />
                </div>
              ))}
            </div>
          )}

          {/* TOTAL + PAYPAL */}
          {cart.length > 0 && (
            <div className="mt-10 text-center text-white">
              <h2 className="text-2xl font-bold">
                Total: {total} kr
              </h2>

              <div className="mt-6 flex justify-center">
                <PayPalButtons
                  style={{ layout: "vertical" }}

                  createOrder={(data, actions) => {
                    return actions.order.create({
                      purchase_units: [
                        {
                          amount: {
                            value: (total / 10).toFixed(2),
                          },
                        },
                      ],
                    });
                  }}

                  onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                      console.log("BETALT:", details);
                      alert("Betaling fullført");
                    });
                  }}

                  onError={(err) => {
                    console.error("PayPal error:", err);
                  }}
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}