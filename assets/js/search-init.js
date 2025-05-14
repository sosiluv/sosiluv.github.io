function initSimpleSearch() {

  const input = document.getElementById('search-input');
  const results = document.getElementById('results-container');
  if (!input || !results) return;

  if (window.simpleJekyllSearchInstance){
    // 이전 인스턴스를 제거 (동일한 DOM에 두 번 초기화 방지)
    delete window.simpleJekyllSearchInstance;
  } 
    
    SimpleJekyllSearch({
        searchInput: input,
        resultsContainer: results,
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
  