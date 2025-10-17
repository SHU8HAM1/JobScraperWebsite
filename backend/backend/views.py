from django.http import JsonResponse
from django.views.decorators.http import require_GET

from .job_scraper import search_all_sites, search_indeed

@require_GET
def search(request):
    job_title = request.GET.get('job_title')
    if not job_title:
        return JsonResponse({'error': 'Missing job_title parameter'}, status=400)

    # Optional: page parameter for Indeed
    page = request.GET.get('page')
    try:
        page = int(page) if page else 1
    except ValueError:
        page = 1

    # Only Indeed supports pagination for now
    indeed_jobs = search_indeed(job_title, page=page) if 'indeed' in request.GET.get('site', '').lower() else []
    # For all sites (default behavior)
    if not indeed_jobs:
        jobs = search_all_sites(job_title)
    else:
        jobs = indeed_jobs
    return JsonResponse({'results': jobs})
