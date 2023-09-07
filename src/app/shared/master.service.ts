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

  createBlog(blogInput: BlogModel): Observable<BlogModel> {
    return this.httpClient.post<BlogModel>(`${this.baseUrl}/blogs`, blogInput);
  }

  updateBlog(blogInput: BlogModel): Observable<BlogModel> {
    return this.httpClient.put<BlogModel>(
      `${this.baseUrl}/blogs/${blogInput.id}`,
      blogInput,
    );
  }

  removeBlog(id: number | null): Observable<BlogModel> {
    return this.httpClient.delete<BlogModel>(`${this.baseUrl}/blogs/${id}`);
  }
}
