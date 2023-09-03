import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { BlogModel } from './store/blog/blog.model';

@Injectable({
  providedIn: 'root',
})
export class MasterService {
  private readonly httpClient = inject(HttpClient);
  private readonly baseUrl = 'http://localhost:3000';

  loadBlogs(): Observable<BlogModel[]> {
    return this.httpClient.get<BlogModel[]>(`${this.baseUrl}/blogs`);
  }
}
