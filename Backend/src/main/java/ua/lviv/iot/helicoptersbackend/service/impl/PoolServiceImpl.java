package ua.lviv.iot.helicoptersbackend.service.impl;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import ua.lviv.iot.helicoptersbackend.dao.PoolDao;
import ua.lviv.iot.helicoptersbackend.model.Pool;
import ua.lviv.iot.helicoptersbackend.model.enums.PoolType;
import ua.lviv.iot.helicoptersbackend.service.PoolService;

@Service
@AllArgsConstructor
public class PoolServiceImpl implements PoolService {

    private final PoolDao poolDao;

    @Override
    public List<Pool> getAllPools() {
        return poolDao.findAll();
    }

    @Override
    public List<Pool> getPools(String[] filters) {
        return poolDao.findPoolsByFilters(Arrays.stream(filters).map(PoolType::valueOf).collect(Collectors.toList()));
    }

    @Override
    public Pool createPool(Pool pool) {
        return poolDao.save(pool);
    }

    @Override
    public Pool updatePool(Pool pool) {
        return poolDao.save(pool);
    }

    @Override
    public void deletePool(Integer id) {
    	poolDao.deleteById(id);
    }
}
