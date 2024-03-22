SELECT *
FROM public.dummytransactions
WHERE userId = '3'
AND EXTRACT(MONTH FROM date) = EXTRACT(MONTH FROM CURRENT_DATE)
AND EXTRACT(YEAR FROM date) = EXTRACT(YEAR FROM CURRENT_DATE);
	
	
	
select * from user_sub_category usc
join master_category mc on usc.parent_category=mc.id;

select * from user_sub_category usc
join master_category mc on usc.parent_category = mc.id
where usc.user_id is null or usc.user_id = 1;

