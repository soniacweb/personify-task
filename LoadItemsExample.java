package com.aidedata.load;

import java.io.BufferedReader;
import org.apache.commons.csv.*;
import org.json.simple.JSONArray;

public class LoadItemsExample {

  public static void main(String[] args) {

    BufferedReader br;

    // TODO: initialise br from the example file
    br = null;

    // execute the file load
    JSONArray json = LoadItemsExample.execute(br);

    // This will print the json
    System.out.println(json.toJSONString());

    /*
     * The following tasks are optional, but recommended if you are able to do so as they will show
     * off your coding proficiency
     *
     * OPTIONAL TASK 1 The product feed includes a separate line per colour and size variant, add a
     * field called colours to each product as per below:
     *
     * "colours": "black|blue|yellow",
     *
     * OPTIONAL TASK 2 Normally JSON would be a bad way to handle a product feed as the feed may be
     * extremely large and cause errors. We would normally write directly to the database instead.
     * For this task write the product details to an in-memory database (such as
     * http://www.h2database.com) instead of JSON, and then print out the products here.
     *
     */

  }

  /*
   * TODO: This function should return a JSON array of the products in the product file in the
   * following format
   *
   * [ { "code": "ABC", "name": "123", "price": 10.00, "image": "http://example.com/image.jpg",
   * "link": "http://example.com/product.html" }, { ... } ]
   *
   * If you haven't used JSON before this is effectively an array of arrays of key-value pairs. In
   * JSON this is referred to as an array of objects.
   *
   */
  public static JSONArray execute(BufferedReader br) {
    CSVParser csvParser;
    JSONArray productArray = new JSONArray();

    try {
      csvParser = new CSVParser(br,
          CSVFormat.DEFAULT.withDelimiter('\t').withFirstRecordAsHeader().withTrim());
    } catch (Exception e) {
      e.printStackTrace();
      return productArray;
    }

    for (CSVRecord csvRecord : csvParser) {
      // TODO: most of your code will normally go here...
    }

    try {
      csvParser.close();
      br.close();
    } catch (Exception e) {
      e.printStackTrace();
    }

    return productArray;

  }

}
