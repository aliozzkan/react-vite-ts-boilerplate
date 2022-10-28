export class StorageHelper<T = any> {
  private storageKey: string;

  constructor(storageKey: string) {
    this.storageKey = storageKey;
  }

  save(data: any) {
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  get(): T | null {
    const data = localStorage.getItem(this.storageKey);
    if (!data) return null;

    return JSON.parse(data);
  }

  delete() {
    localStorage.removeItem(this.storageKey);
  }
}
