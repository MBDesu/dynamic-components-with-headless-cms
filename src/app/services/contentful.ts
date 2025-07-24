import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';

export const CONTENT_TYPES = {
  card: 'card',
}

const CONFIG = {
  space: '', // your Contentful space ID here
  accessToken: '', // your Contentful access token here
  environment: '', // your Contentful environment here; defaults to master
};

@Injectable({
  providedIn: 'root'
})
export class Contentful {

  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
    environment: CONFIG.environment || 'master',
  });

  async getContent(): Promise<Entry<any>[]> {
    // this only gets cards, but other content types or parameters can be specified
    let res = await this.cdaClient.getEntries(Object.assign({
      content_type: CONTENT_TYPES.card,
    }));
    return res.items;
  }

}
