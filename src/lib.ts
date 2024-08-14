import { SignJWT, jwtVerify } from "jose";
import moment from "moment";

const secretKey = "secret";
const key = new TextEncoder().encode(secretKey);

const getNumberOfDaysForTokenExpiration = (expiresAt: string) => {
  var expiresAtDate = moment([
    new Date(expiresAt).getFullYear(),
    new Date(expiresAt).getMonth(),
    new Date(expiresAt).getDate(),
  ]);

  var currentDate = moment([
    new Date().getFullYear(),
    new Date().getMonth(),
    new Date().getDate(),
  ]);

  return expiresAtDate.diff(currentDate, "days");
};

export async function encrypt(payload: any) {
  const numberOfDaysForExpiration = getNumberOfDaysForTokenExpiration(
    payload.expiresAt
  );

  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${numberOfDaysForExpiration}d`)
    .sign(key);
}

export async function decrypt(input: string): Promise<any> {
  const { payload } = await jwtVerify(input, key, {
    algorithms: ["HS256"],
  });
  console.log("payload: ", payload);

  return payload;
}
