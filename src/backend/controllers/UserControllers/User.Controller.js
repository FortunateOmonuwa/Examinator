import { VerifyAccount } from "../../imports/ServicesImports.js";
import Response from "../../utilities/Response.js";
import { clientUrl } from "../../../../Config.js";
const viteBaseUrl = clientUrl;

const VerifyAccountAsync = async (req, res) => {
  const { id, token } = req.query;

  try {
    console.log("Verification attempt by", id);
    const response = await VerifyAccount(id, token);
    if (response.isSuccessful) {
      console.log("Verification successful");
      res.redirect(`${viteBaseUrl}/verification/success`);
    } else if (response.error === "already-verified") {
      console.log("Account already verified");
      res.redirect(`${viteBaseUrl}/verification/already-verified`);
    } else {
      console.log("Verification failed");
      res.redirect(`${viteBaseUrl}/verification/failed?id=${id}`);
    }
  } catch (error) {
    console.error("Verification error:", error);
    res.redirect(`${viteBaseUrl}/error`);
  }
};

export { VerifyAccountAsync };
