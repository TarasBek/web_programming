package ua.lviv.iot.helicoptersbackend.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import ua.lviv.iot.helicoptersbackend.model.Pool;
import ua.lviv.iot.helicoptersbackend.model.enums.PoolType;

import java.util.List;

@Repository
public interface PoolDao extends JpaRepository<Pool, Integer> {
    @Query("select pool from Pool pool where pool.type in :sqlFiltersList")
    List<Pool> findPoolsByFilters(List<PoolType> sqlFiltersList);

    void deleteById(Integer id);
}
