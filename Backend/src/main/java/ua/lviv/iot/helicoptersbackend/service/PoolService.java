package ua.lviv.iot.helicoptersbackend.service;

import ua.lviv.iot.helicoptersbackend.model.Pool;

import java.util.List;

public interface PoolService {
    List<Pool> getAllPools();

    List<Pool> getPools(String[] filters);

    Pool createPool(Pool pool);

    Pool updatePool(Pool pool);

    void deletePool(Integer id);
}
