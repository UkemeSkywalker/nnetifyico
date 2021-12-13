import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
// import Mainbutton from './Mainbutton';

// type formValues={
//     numberOfToken: number,
//     totalAmountUSD: number,
//     bscAddress: string,
//     paymentMethod: string,
//     currency: string
// }

function Form({ submitData }: any) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      numberOfToken: 1234,
      totalAmountUSD: 2345,
      bscAddress: "Tokens would be transfered to this BSC address",
      paymentMethod: "Meta Mask",
      currency: "BNB",
    },
  });
  useEffect(() => {
    const subscribe = watch((data) => {
      console.log(data);
    });
    return () => {
      subscribe.unsubscribe();
    };
  }, [watch]);

  return (
    <div className="buycoin__form">
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
          submitData(data);
        })}
      >
        <div className="form__container">
          <div className="form__row form__row1">
            <span className="input1">
              <label htmlFor="numberOfToken">Number of Tokens</label>
              <br></br>
              <input
                {...register("numberOfToken", {
                  valueAsNumber: true,
                  required: "This is required",
                })}
                id="numberOfToken"
                defaultValue="1029"
              />
              {errors.numberOfToken && <p>{errors.numberOfToken.message}</p>}
            </span>
            <span className="input2">
              <label htmlFor="totalAmountUSD"> Total Amount USD</label>
              <br></br>
              <input
                type="number"
                {...register("totalAmountUSD", { valueAsNumber: true })}
                id="totalAmountUSD"
                placeholder="$0.09"
              />
              {errors.totalAmountUSD && <p>{errors.totalAmountUSD.message}</p>}
            </span>
          </div>
          <div className="form__row form__row2">
            <span className="input1">
              <label htmlFor="bscAddress"> Binance Smart Chain Address</label>
              <br></br>
              <input
                {...register("bscAddress", {
                  required: "This is required",
                  minLength: {
                    value: 20,
                    message: "Address should be above 20 characters",
                  },
                })}
                id="bscAddress"
              />
              {errors.bscAddress && <p> {errors.bscAddress.message}</p>}
            </span>
          </div>
          <div className="form__row form__row3">
            <span className="input1">
              <label htmlFor="currency">Currency</label>
              <br></br>
              <select {...register("currency")} id="currency">
                <option value="BNB">BNB</option>
              </select>
            </span>
            <span className="input2">
              <label htmlFor="paymentMethod">Payment Method</label>
              <select {...register("paymentMethod")} id="paymentMethod">
                <option value="metamask">Metamask</option>
                <option value="walletconnect">Wallet Connect </option>
              </select>
            </span>
          </div>
          <div className="form__row form__row4">
            <button type="reset" className="input1">
              {" "}
              Reset
            </button>
            <button type="submit" className="input2">
              Buy Now
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Form;
