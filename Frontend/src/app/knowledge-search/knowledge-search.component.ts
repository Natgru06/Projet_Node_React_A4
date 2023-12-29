// knowledge-search.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-knowledge-search',
  templateUrl: './knowledge-search.component.html',
  styleUrls: ['./knowledge-search.component.scss']
})
export class KnowledgeSearchComponent implements OnInit {
  knowledgeSearchForm: FormGroup;
  searchResults: any[] = [];
  availableTags: string[] = [];

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.knowledgeSearchForm = this.fb.group({
      topic: [''],
      description: [''],
      category: [''],
      difficulty: ['', [Validators.min(1), Validators.max(10)]],
      prerequisite: [''],
      selectedTag: [''],
      tags: [[]],
      source: ['']
    });
  }
  atLeastOneFieldFilled(): boolean {
    const formValues = this.knowledgeSearchForm.value;
    return Object.values(formValues).some(value => !!value);
  }
  ngOnInit(): void {
    // Optional: If you have additional initialization logic
    this.availableTags = ['', 'algorithm', 'sorting', 'searching', 'array', 'linked list', 'tree', 'Java', 'Python', 'JavaScript', 'CPU', 'RAM', 'Motherboard', 'security', 'encryption', 'firewalls', 'machine learning', 'neural networks', 'natural language processing', 'SQL', 'database design', 'query optimization', 'HTML5', 'CSS3', 'React', 'Node.js', 'kernel', 'file systems', 'process management', 'SDLC', 'version control', 'testing', 'TCP/IP', 'routing', 'wireless networks', 'time complexity', 'space complexity', 'big-O notation', 'AWS', 'Azure', 'Google Cloud', 'iOS', 'Android', 'React Native'];
  }
  addTag(): void {
    const selectedTag = this.knowledgeSearchForm.get('selectedTag')?.value;
    const tagsControl = this.knowledgeSearchForm.get('tags');

    if (selectedTag && tagsControl && !tagsControl.value.includes(selectedTag)) {
      tagsControl.setValue([...tagsControl.value, selectedTag]);
    }
  }

  removeTag(tag: string): void {
    const tagsControl = this.knowledgeSearchForm.get('tags');

    if (tagsControl) {
      tagsControl.setValue(tagsControl.value.filter((t: string) => t !== tag));
    }
  }

  onKnowledgeSearchSubmit(): void {
    // Perform the knowledge search based on the entered form values
    const searchCriteria = this.knowledgeSearchForm.value;
    console.log('Button clicked!');
    // Make an HTTP request to the backend API
    this.http.post<any>('http://localhost:3001/api/computer-science/search', searchCriteria)
      .subscribe(response => {
        if (response.success) {
          this.searchResults = response.results;
        } else {
          console.error('Error fetching search results:', response);
        }
      });
  }
}
