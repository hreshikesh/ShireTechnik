package com.shiretechnik.download.service;

import com.shiretechnik.download.dto.DownloadRequest;
import com.shiretechnik.download.dto.DownloadResponse;
import org.springframework.data.domain.Page;


public interface DownloadService {
    boolean submitDownLoadInfo(DownloadRequest downloadRequest);

    Page<DownloadResponse> getAllDownloadDetails(int page,
                                                 int size,
                                                 String sortBy,
                                                 String direction);
}
