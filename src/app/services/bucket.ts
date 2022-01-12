import * as Bucket from '@spica-devkit/bucket';
  /**
   * Call this method before interacting with buckets.
   * @param initOptions Initialize options to initialize the '@spica-devkit/bucket'.
   */
  export function initialize(
    ...initOptions: Parameters<typeof Bucket.initialize>
  ) {
    initOptions[0].publicUrl = 'https://asset-playground-05dae.hq.spicaengine.com/api';
    Bucket.initialize(...initOptions);
  }

type Rest<T extends any[]> = ((...p: T) => void) extends ((p1: infer P1, ...rest: infer R) => void) ? R : never;
type getArgs = Rest<Parameters<typeof Bucket.data.get>>;
type getAllArgs = Rest<Parameters<typeof Bucket.data.getAll>>;
type realtimeGetArgs = Rest<Parameters<typeof Bucket.data.realtime.get>>;
type realtimeGetAllArgs = Rest<Parameters<typeof Bucket.data.realtime.getAll>>;
type id = { _id: string };




export interface Recipe{
  _id?: string;
  title?: string;
  description?: string;
  video?: string;
  head_image?: string;
  images?: string[];
  click_counter?: number;
  servings?: string;
  prep_time?: string;
  cook_time?: string;
  category?: (Recipe_category & id | string);
}
export namespace recipe {
  const BUCKET_ID = '61dbec1ec0da93002c1dec48';
      export function get (...args: getArgs) {
        return Bucket.data.get<Recipe & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Recipe & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Recipe, "_id">) {
        ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Recipe & id) {
        ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Recipe> & id
      ) {
        ['category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Recipe & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Recipe & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Site_config{
  _id?: string;
  title?: string;
  logo?: string;
  about_us?: string;
  showcases?: (Recipe & id | string)[];
}
export namespace site_config {
  const BUCKET_ID = '61dbed4bc0da93002c1dec65';
      export function get (...args: getArgs) {
        return Bucket.data.get<Site_config & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Site_config & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Site_config, "_id">) {
        ['showcases'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Site_config & id) {
        ['showcases'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Site_config> & id
      ) {
        ['showcases'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Site_config & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Site_config & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Recipe_category{
  _id?: string;
  title?: string;
  sub_category?: (Recipe_category & id | string);
}
export namespace recipe_category {
  const BUCKET_ID = '61dbeda2c0da93002c1dec6f';
      export function get (...args: getArgs) {
        return Bucket.data.get<Recipe_category & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Recipe_category & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Recipe_category, "_id">) {
        ['sub_category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Recipe_category & id) {
        ['sub_category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Recipe_category> & id
      ) {
        ['sub_category'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Recipe_category & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Recipe_category & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Blog{
  _id?: string;
  title?: string;
  description?: string;
  image?: string;
  date?: Date | string;
}
export namespace blog {
  const BUCKET_ID = '61dbee82c0da93002c1dec86';
      export function get (...args: getArgs) {
        return Bucket.data.get<Blog & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Blog & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Blog, "_id">) {
        
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Blog & id) {
        
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Blog> & id
      ) {
        
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Blog & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Blog & id>(BUCKET_ID, ...args);
        };
  }
}

export interface Menu{
  _id?: string;
  title?: string;
  description?: string;
  image?: string;
  recipes?: (Recipe & id | string)[];
}
export namespace menu {
  const BUCKET_ID = '61dbef84c0da93002c1decb5';
      export function get (...args: getArgs) {
        return Bucket.data.get<Menu & id>(BUCKET_ID, ...args);
      };
      export function getAll (...args: getAllArgs) {
        return Bucket.data.getAll<Menu & id>(BUCKET_ID, ...args);
      };
      export function insert (document: Omit<Menu, "_id">) {
        ['recipes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.insert(BUCKET_ID, document);
      };
      export function update (document: Menu & id) {
        ['recipes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.update(
          BUCKET_ID,
          document._id,
          document
        );
      };  
      export function patch (
        document: Partial<Menu> & id
      ) {
        ['recipes'].forEach((field) => {
        if (typeof document[field] == 'object') {
          document[field] = Array.isArray(document[field])
            ? document[field].map((v) => v._id || v)
            : document[field]._id;
        }
      });
        return Bucket.data.patch(BUCKET_ID, document._id, document);
      };  
      export function remove (documentId: string) {
        return Bucket.data.remove(BUCKET_ID, documentId);
      };
  export namespace realtime {
        export function get (...args: realtimeGetArgs) {
          return Bucket.data.realtime.get<Menu & id>(BUCKET_ID, ...args);
        };
        export function getAll (...args: realtimeGetAllArgs) {
          return Bucket.data.realtime.getAll<Menu & id>(BUCKET_ID, ...args);
        };
  }
}