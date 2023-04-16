import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DiscoverPage } from './discover/discover.page';
import { PlaceDetailPage } from './discover/place-detail/place-detail.page';
import { OffersPage } from './offers/offers.page';
import { PlacesPage } from './places.page';
import { PlacesPageRoutingModule } from './places.page.routing.module';
import { OfferBookingsPage } from './offers/offer-bookings/offer-bookings.page';
import { NewOfferPage } from './offers/new-offer/new-offer.page';
import { EditOfferPage } from './offers/edit-offer/edit-offer.page';

@NgModule({
  declarations: [
    PlacesPage,
    DiscoverPage,
    PlaceDetailPage,
    OffersPage,
    NewOfferPage,
    EditOfferPage,
    OfferBookingsPage,
  ],
  imports: [
    IonicModule, 
    CommonModule, 
    FormsModule,
    PlacesPageRoutingModule,
  ]
})
export class PlacesPageModule { }