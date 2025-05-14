function initSimpleSearch() {
    
    SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('results-container'),
        json: '/search.json', // 또는 '{{ "/search.json" | relative_url }}'
        searchResultTemplate: `
        <li class="content-item">
          <div class="content-row">
            <i class="fas fa-folder fa-fw"></i>
            <a href="{url}">{categories}</a>
          </div>
          <div class="content-row">
            <i class="fas fa-book fa-fw"></i>
            <a href="{url}">{title}</a>
          </div>
          <div class="content-row">
            <i class="fas fa-tags fa-fw"></i>
            <a href="{url}">{tags}</a>
          </div>
          <div class="content-row">
            <i class="fas fa-calendar-alt fa-fw"></i>
            <a href="{url}">{date}</a>
          </div>
        </li>
      `,
        noResultsText: '검색 결과가 없습니다.',
        limit: 10,
        fuzzy: false
    });
}
  