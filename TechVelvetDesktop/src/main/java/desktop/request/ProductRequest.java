package desktop.request;

import java.io.DataOutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import com.google.gson.Gson;

import desktop.entity.Product;

public class ProductRequest {
    public static void postProduct(Product product) {
        try {
            URL url = new URL("http://localhost:8080/api/products");
            HttpURLConnection con = (HttpURLConnection) url.openConnection();
            con.setRequestMethod("POST");
            con.setRequestProperty("Content-Type", "application/json; utf-8");
            con.setRequestProperty("Accept", "application/json");
            con.setDoOutput(true);

            Gson gson = new Gson();
            try (DataOutputStream wr = new DataOutputStream(con.getOutputStream())) {
                String json = gson.toJson(product);
                wr.write(json.getBytes());
            }

            int responseCode = con.getResponseCode();
            System.out.println("Response Code : " + responseCode);

        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}