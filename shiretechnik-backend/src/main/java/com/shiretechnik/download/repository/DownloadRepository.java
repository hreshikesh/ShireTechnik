package com.shiretechnik.download.repository;

import com.shiretechnik.download.entity.DownloadEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DownloadRepository extends JpaRepository<DownloadEntity,Long> {
}
