import { Component, OnInit } from "@angular/core";
import { products } from "../products";
import { CartService } from "../cart.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-product-details",
  templateUrl: "./product-details.component.html",
  styleUrls: ["./product-details.component.css"]
})
export class ProductDetailsComponent implements OnInit {
  product;

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert("product added.");
  }
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get("productId"));

    this.product = products.find(product => product.id === productIdFromRoute);
  }
}
